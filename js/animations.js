let cols = document.querySelectorAll(".col") ; 
const observer = new IntersectionObserver(function(entries , observer){ 
    entries.forEach(entry=> { 
        if(!entry.isIntersecting){ 
            return;
        }
        else { 
            entry.target.classList.add("newCol");
            console.log(entry)
        }
    })
} , {rootMargin: "-50px"})
cols.forEach(col => { 
    observer.observe(col)
})
let icons = document.querySelectorAll(".iconCol");
const newobserver = new IntersectionObserver(function(entries , newobserver){
    entries.forEach((entry , i)=> { 
        if(!entry.isIntersecting){ 
            return;
        }
        else { 
            setTimeout(()=> { 
                entry.target.classList.add("newIcon");
            } , i * 145)
            entry.target.classList.remove("newCol");
            console.log(entry)
        }
    })
} , {rootMargin: "-50px"})
icons.forEach(icon => { 
    newobserver.observe(icon)
})

let newCols = document.querySelectorAll(".colAni"); 
const reserve = new IntersectionObserver(function(entries , reserve) { 
    entries.forEach(entry => { 
        if(!entry.isIntersecting) { 
            return; 
        }
        else { 
            entry.target.classList.add("newColAni")
        }
    })
})
newCols.forEach(newCol => { 
    reserve.observe(newCol)
})

