const debounce=(cb, delay)=>{
    let timer;
    return (...args)=>{
        if (timer) clearTimeout(timer);
        setTimeout(cb, delay, ...args);
    };
};

const throttle=(cb, delay)=>{
    let timer;
    return (...args)=>{
        if(timer) return;
        timer=setTimeout(()=>{
            cb(...args);
            timer=null;
        },delay);
    };
};


// test
const debo = debounce(a => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) debo(i);   // 15

const thro = throttle(a => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i);   // 11