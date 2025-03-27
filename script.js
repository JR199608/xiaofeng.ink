// 关键词列表
const KEYWORDS = {
    POSITIVE: [
        '肿瘤',
        '癌',
        'AFP偏高',
        '肝病',
        '肝炎',
        '肝硬化',
        '原发性肝癌',
        '生殖细胞肿瘤',
        '睾丸癌',
        '卵巢癌',
        '转移性肝癌'
    ],
    EXCEPTIONS: [
        '急性胰腺炎',
        '单纯性骨折',
        '普通感冒',
        '上呼吸道感染'
    ]
};

let hot; // Handsontable 实例
let analysisResults = []; // 存储分析结果

function analyzeDiagnosis() {
    const diagnosis = document.getElementById('diagnosis').value.trim();
    if (!diagnosis) {
        alert('请输入诊断内容！');
        return;
    }

    const result = analyzeText(diagnosis);
    showResult(result.isPositive, result.title, result.reason);
}

function analyzeText(diagnosis) {
    // 检查是否包含例外情况
    const hasException = KEYWORDS.EXCEPTIONS.some(keyword => diagnosis.includes(keyword));
    if (hasException) {
        return {
            isPositive: false,
            title: '不建议进行甲胎蛋白检测',
            reason: '当前诊断不属于需要进行甲胎蛋白检测的适应症范围。'
        };
    }

    // 检查是否包含需要检测的关键词
    const hasPositive = KEYWORDS.POSITIVE.some(keyword => diagnosis.includes(keyword));
    if (hasPositive) {
        return {
            isPositive: true,
            title: '建议进行甲胎蛋白检测',
            reason: generatePositiveReason(diagnosis)
        };
    }

    return {
        isPositive: false,
        title: '建议咨询医师',
        reason: '当前诊断内容不足以确定是否需要进行甲胎蛋白检测，建议咨询主管医师。'
    };
}

function showResult(isPositive, title, reason) {
    const resultCard = document.getElementById('resultCard');
    const resultTitle = document.getElementById('resultTitle');
    const resultReason = document.getElementById('resultReason');

    resultCard.style.display = 'block';
    resultTitle.textContent = title;
    resultTitle.className = 'card-title ' + (isPositive ? 'text-primary' : 'text-secondary');
    resultReason.textContent = reason;
}

function generatePositiveReason(diagnosis) {
    let reasons = [];
    
    if (diagnosis.includes('肿瘤') || diagnosis.includes('癌')) {
        reasons.push('甲胎蛋白是重要的肿瘤标志物，可用于监测治疗效果和预后评估。');
    }
    
    if (diagnosis.includes('AFP偏高')) {
        reasons.push('已发现AFP水平异常，需要进行动态监测。');
    }
    
    if (diagnosis.includes('肝')) {
        reasons.push('肝脏相关疾病可能影响AFP水平，需要进行检测以辅助诊断和监测。');
    }

    if (reasons.length === 0) {
        reasons.push('根据诊断内容，建议进行甲胎蛋白检测以辅助评估病情。');
    }

    return reasons.join(' ');
}

// 文件处理相关函数
function analyzeFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('请选择文件！');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        processData(jsonData);
    };
    reader.readAsArrayBuffer(file);
}

function processData(data) {
    // 检查数据格式
    if (!data.length || !data[0].hasOwnProperty('序号') || !data[0].hasOwnProperty('出院诊断')) {
        alert('文件格式错误！请确保文件包含"序号"和"出院诊断"列。');
        return;
    }

    // 分析数据
    analysisResults = data.map(row => {
        const result = analyzeText(row['出院诊断']);
        return {
            '序号': row['序号'],
            '出院诊断': row['出院诊断'],
            '是否建议检测': result.isPositive ? '是' : '否',
            '理由': result.reason
        };
    });

    // 显示结果表格
    displayResults();
    // 显示统计信息
    showSummary();
}

function displayResults() {
    const container = document.getElementById('tableContainer');
    
    if (hot) {
        hot.destroy();
    }

    hot = new Handsontable(container, {
        data: analysisResults,
        columns: [
            { data: '序号', title: '序号' },
            { data: '出院诊断', title: '出院诊断' },
            { data: '是否建议检测', title: '是否建议检测' },
            { data: '理由', title: '理由' }
        ],
        colHeaders: true,
        rowHeaders: true,
        height: 'auto',
        licenseKey: 'non-commercial-and-evaluation',
        stretchH: 'all',
        readOnly: true
    });
}

function showSummary() {
    const totalCases = analysisResults.length;
    const recommendedCases = analysisResults.filter(r => r['是否建议检测'] === '是').length;
    const notRecommendedCases = totalCases - recommendedCases;

    const summaryHTML = `
        <h5>分析汇总</h5>
        <p>总病例数：${totalCases}</p>
        <p>建议检测数：${recommendedCases} (${((recommendedCases/totalCases)*100).toFixed(1)}%)</p>
        <p>不建议检测数：${notRecommendedCases} (${((notRecommendedCases/totalCases)*100).toFixed(1)}%)</p>
    `;

    document.querySelector('.analysis-summary').style.display = 'block';
    document.getElementById('summaryContent').innerHTML = summaryHTML;
}

// 导出功能
function exportResults() {
    if (!analysisResults || analysisResults.length === 0) {
        alert('没有可导出的数据！');
        return;
    }

    try {
        // 创建工作簿
        const wb = XLSX.utils.book_new();
        
        // 准备数据
        const wsData = [
            // 表头
            ['序号', '出院诊断', '是否建议检测', '理由'],
            // 数据行
            ...analysisResults.map(row => [
                row['序号'],
                row['出院诊断'],
                row['是否建议检测'],
                row['理由']
            ])
        ];

        // 添加汇总信息
        const totalCases = analysisResults.length;
        const recommendedCases = analysisResults.filter(r => r['是否建议检测'] === '是').length;
        const notRecommendedCases = totalCases - recommendedCases;

        wsData.push(
            [], // 空行
            ['分析汇总'],
            ['总病例数', totalCases],
            ['建议检测数', `${recommendedCases} (${((recommendedCases/totalCases)*100).toFixed(1)}%)`],
            ['不建议检测数', `${notRecommendedCases} (${((notRecommendedCases/totalCases)*100).toFixed(1)}%)`]
        );

        // 创建工作表
        const ws = XLSX.utils.aoa_to_sheet(wsData);

        // 设置列宽
        const colWidths = [
            { wch: 10 },  // 序号
            { wch: 50 },  // 出院诊断
            { wch: 15 },  // 是否建议检测
            { wch: 50 }   // 理由
        ];
        ws['!cols'] = colWidths;

        // 将工作表添加到工作簿
        XLSX.utils.book_append_sheet(wb, ws, '甲胎蛋白检测分析结果');

        // 生成文件名（包含时间戳）
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const fileName = `甲胎蛋白检测分析结果_${timestamp}.xlsx`;

        // 导出文件
        XLSX.writeFile(wb, fileName);
    } catch (error) {
        console.error('导出失败：', error);
        alert('导出失败，请重试！');
    }
} 