let  txtNames:string[]=['venkat','das','need gf'];
txtNames.forEach(element => {
    console.log(element);
});

let country:string='india';
switch (country) {
    case 'india':{
        console.log('india,equity for all');
        break;
    }
    case 'USA':{
        console.log('USA, top in GDP');
        break;
    }
    case 'USSR':{
        console.log('USSR');
        break;
    }
    case 'UK':{
        console.log('UK');
        break;
    }
    case 'Europe':{
        console.log('Europe');
        break;
    }
    case 'SA':{
        console.log('SA');
        break;
    }  
    case 'default':{
        console.log('not available n country list');
        break;
    }
}
