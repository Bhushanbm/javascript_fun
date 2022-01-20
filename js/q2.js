// JavaScript source code
const ctr = ["India", "Australia", "Canada", "Egypt"];
ctr.sort(function (a, b)
{
    return b.length - a.length;
}
    )
console.log(ctr[0]);