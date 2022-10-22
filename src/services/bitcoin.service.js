import axios from 'axios'
import { storageService } from './storage.service'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate(currency) {
    console.log('currency', currency)
    const rateMap = storageService.loadFromStorage('rate') || {}
    if (rateMap[currency]) {
        console.log('From Cache');
        return rateMap[currency]
    }

    console.log('From Network');
    const apiStr = `https://blockchain.info/tobtc?currency=${currency}&value=1`
    const res = await axios.get(apiStr)
    const rate = (1 / res.data).toFixed(2)
    rateMap[currency] = rate
    storageService.saveToStorage('rate', rateMap)
    return rate
}

async function getMarketPriceHistory() {
    const historyFromStorage = storageService.loadFromStorage('history')
    if (historyFromStorage) {
        console.log('From Cache');
        return historyFromStorage
    }

    console.log('From Network');
    const str = `https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true`
    const res = await axios.get(str)

    const marketPriceHistory = res.data.values.map(value => {
        const newDate = new Date(value.x * 1000)
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
        return { date: dateToDisplay, rate: value.y }
    })

    storageService.saveToStorage('history', marketPriceHistory)
    return marketPriceHistory
}

async function getAvgBlockSize() {
    const str = `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
    const avgBlockSize = await axios.get(str)
}