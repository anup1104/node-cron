const cron = require("node-cron")
const fs = require("fs")

let rawData = fs.readFileSync("./invoices.json", "utf-8");
const invoice = JSON.parse(rawData);
console.log(invoice)

const task = ()=>{
    const unpaidInvoices = invoice.filter((item)=>{
        return item.status === "unpaid";
    })
    fs.writeFileSync("invoices.json", JSON.stringify(unpaidInvoices, null, 2));

}
exports.scheduler = cron.schedule("* * * * *",task);