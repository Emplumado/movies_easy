const fs =require('fs');
const faqJSON=fs.readFileSync('./faqs.json','utf-8');
const faqs=JSON.parse(faqJSON);


function contenidoTabPreguntasFrecuentes(){
    const titulo="Preguntas Frecuentes";
    let totalPreguntas=0;
    let listadoFaqs='\n';
    faqs.faqs.forEach(function(elem){
        totalPreguntas=totalPreguntas+1;
        listadoFaqs=listadoFaqs+elem.faq_title+'\n'+'\n'+elem.faq_answer+'\n'+"______________________________________________________________________________________________________________________"+'\n'+'\n'+'\n';
    });
    const totalFaqs="Estas son las "+totalPreguntas+" mas frecuentes entre nuestros usuarios:"
    
    return titulo+'\n'+'\n'+totalFaqs+'\n'+'\n'+listadoFaqs;
};
module.exports=contenidoTabPreguntasFrecuentes();