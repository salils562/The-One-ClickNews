let newsApi='214ffd8c044d4f6c8362b916922bc75d';
let newName='the-times-of-india';
let xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${newName}&apiKey=${newsApi}`,true);
xhr.onprogress=function(){
    console.log("Please wait we are fetching the news");
}
xhr.onload=function(){ 
let newsAccordian=document.getElementById('accordionNews');
if(this.status===200){  
let txt=JSON.parse(this.responseText);
let html="";
txt.articles.forEach((element,index) => {
    html+=`<div class="accordion-item">
    <h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
       <b> ${element.title} </b>
      </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
   ${element.content} <a href="${element.url}" target="_blank">Click to read more</a>
      </div>
    </div>
    </div>`
});
newsAccordian.innerHTML=html;
}
else{
  newsAccordian.innerHTML=`<p>Can't Fetch News </br>Sorry ! Some server issue </p>`;
}
}
xhr.send();