var tablo = {
    buyerPower: () => {
        return ((ct).Buy_I_Volume / (ct).Buy_CountI) / ((ct).Sell_I_Volume / (ct).Sell_CountI)
    },
    corpAsist:()=> {
        return ((ct).Sell_N_Volume / ((ct).Sell_N_Volume + (ct).Sell_I_Volume)) * ((ct).Buy_I_Volume / ((ct).Buy_I_Volume + (ct).Buy_N_Volume))*100
    },
    corpBuy
}