export const currency = {
    dollar: "$"
}

export const help = {
    // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    apiURLWeekly: "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo",
    apiURLGDP: "https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=demo",

    tableGDP: "GDP",
    tableWeekly: "Weekly",

    // MetaData: "Meta Data",
    Data: "Weekly Time Series",

    open: "1. open",
    high: "2. high",
    low: "3. low",
    close: "4. close",
    volume: "5. volume",

    RealGrossDomesticProduct: "Real Gross Domestic Product",
    Annual: "annual",
    BillionsOfDollars: "billions of dollars",
}




// Not needed, could add later

// export const metaData = {
//     Information: "Information",
//     Symbol: "Symbol",
//     LastRefreshed: "Last Refreshed",
//     TimeZone: "Time Zone",
//
//     InformationData: "Weekly Prices (open, high, low, close) and Volumes",
//     SymbolData: "IBM",
//     LastRefreshedData: "2022-05-31",
//     TimeZoneData: "US/Eastern"
// }