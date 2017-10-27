var diretoria = {
  sigla: "DTIC",
  schedule: "De segunda a sexta-feira, das 7h às 20h",
  nameDir: "Diretoria de Tecnologia da Informação",
  tel: "06121032129",

  responsaveis: [{
    nome: "Anderson",
    cargo: "Diretor do DTIC",
    email: "anderson.costa@ifb.edu.br",
    telefone: "06121032130", image: "images/anderson.jpg"
  },
  {
    nome: "Anderson",
    cargo: "Diretor do DTIC",
    email: "anderson.costa@ifb.edu.br",
    telefone: "06121032130", image: "images/anderson.jpg"
  }]


};


$(function () {
  $(".nameDir").html(diretoria.nameDir);
  $(".schedule").html(diretoria.schedule);
  $(".sigla").html(diretoria.sigla);
  //$(".tel").append(diretoria.tel);

  /* $.each(diretoria.responsaveis, function (key, value) {
    $(".responsaveis").append("<div class='col-md-4'>"+
     " < img src= '"+value.image+"' alt= 'Conheça o "+ diretoria.sigla + "'"+ 
"class='img-quadrata center-block' >" +
      "<h4 class='text-center'>"+ value.cargo +"</h4>"+
      "<h3 class='text-center' >"+value.nome+"<br>"+
        "<small> Diretor</small><br>"+
        "<small>	Email: <a href='mailto:"+value.email+"'> "+value.email+" </small><br>"+
        "<small> Telefone: <a href='tel:"+value.telefone+"'>  <span class='glyphicon glyphicon-earphone'></span> "+value.telefone+"</a>	</small>"+
      "</h3>"+
"</div>");
  }); */
});
