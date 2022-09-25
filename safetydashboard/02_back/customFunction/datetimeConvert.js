module.exports = class ConvertDateTime{

    constructor(getdata){
        this.getdata = getdata;
        this.sendStringDate = [];
    }

    convertTimesStamp(){
        let genDate = [];
        for(let i = 0; i < this.getdata.length; i++){
            const date = new Date(this.getdata[i].timestamp * 1000);
            // const year = date.getFullYear();
            // const month = date.getMonth() + 1;
            // const isDate = date.getDate();
            const stringDate = date.toLocaleDateString("en-US");
            const stringTime =   date.toLocaleTimeString("en-US");
            this.getdata[i]["stringDate"] = stringDate + " " + stringTime;
            // this.getdate[i]["newTime"] = this.getdata[i].timestamp * 1000
            genDate.push(this.getdata[i])
        }
        this.sendStringDate = genDate;
        return this.sendStringDate;
    }
}