function calculateProfitLoss() {
    const selectedStock = document.getElementById('stockSelect').value;
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);

    // Mock data for demonstration purposes (replace with real data)
    const historicalData = {
        'AAPL': [/* Historical stock data for Apple */],
        'GOOGL': [/* Historical stock data for Alphabet */],
    };

    const currentStockPrice = historicalData[selectedStock][0].close;
    const profitLoss = ((currentStockPrice * 100 - investmentAmount) / investmentAmount).toFixed(2);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Profit/Loss: ${profitLoss}%</p>`;
}
