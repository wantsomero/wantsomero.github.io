/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$("body").scrollspy({target:".navbar-fixed-top"}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("div.modal").on("show.bs.modal",function(){var o=this,a=o.id;window.location.hash=a,window.onhashchange=function(){location.hash||$(o).modal("hide")}});