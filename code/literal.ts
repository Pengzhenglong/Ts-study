interface IRes {
    code: number;
    status: string;
    data: any;
  }

  interface Res {
    code: 10000 | 10001 | 50000;
    status: "success" | "failure";
    data: any;
  }

  declare  var res: Res;

//   if(res.status ==='')

const str: "linbudu" = "linbudu";
const num: 599 = 599;
const bool: true = true;

const str1: "linbudu" = "linbudu599";

const str2: string = "linbudu";
const str3: string = "linbudu599";