<#assign el=args.htmlid?html>

<div id="${el}-dialog" class="create-event">
	<div class="hd">${msg("title.signPDF")}</div>

	<div class="bd">
      <form id="${el}-form" action="${url.context}/proxy/digitalsign/signepdf" method="POST">
      		<input type="hidden" name="pdfNodeRef" value="${(args.pdfNodeRef!"")?html}" />
      		<div id="pdfNodeRefDiv">
      			${(args.pdfNodeRef!"")?html}
      		</div>
      		
      		Are you sure you like to apply digital sign based on your profile ?
      		<br>
      		<button id="${el}-ok" type="submit" >${msg("button.YES")}</button>
      		<button id="${el}-cancel">${msg("button.NO")}</button>
      		<a id="${el}-advance" href="${url.context}/page/digitalsign/pdfsignadvpagetemplate">${msg("button.ADVANCE")}</a>
	  </form>
	</div>
</div>