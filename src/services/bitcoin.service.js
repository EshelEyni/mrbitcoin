import axios from 'axios'
import { storageService } from './storage.service'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    const rateFromStorage = storageService.loadFromStorage('rate')
    if (rateFromStorage) {
        console.log('From Cache');
        return rateFromStorage
    }

    console.log('From Network');
    const str = `https://blockchain.info/tobtc?currency=USD&value=1`
    const rate = await axios.get(str)

    storageService.saveToStorage('rate', rate)
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