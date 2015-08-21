(function()
{
	$html = Alfresco.util.encodeHTML;
	YAHOO.Bubbling.fire("registerAction", {
	    actionName: "onPDFSignAction",
	    fn: function onPDFSignAction(record)
		{
			var scope = this;
			var nodeRef = record.nodeRef;
			var jsNode = record.jsNode;
			// Intercept before dialog show
			var doBeforePDFSignDialogShow = function doBeforePDFSignDialogShow(p_form, p_dialog)
			{
				// Dialog title
				var fileSpan = '<span class="light">' + $html(record.displayName) + '</span>';
		
				Alfresco.util.populateHTML([ p_dialog.id + "-dialogTitle", scope.msg("edit-details.title", fileSpan) ]);
			};
			// Using Forms Service, so always create new instance
			var pdfSign = new Alfresco.module.SimpleDialog(this.id + "-pdf sign-" + Alfresco.util.generateDomId());
		
			pdfSign.setOptions(
			{
				width : "auto",
				templateUrl : Alfresco.constants.URL_SERVICECONTEXT + "/components/digitalsign/pdfsign",
				templateRequestParams: 
				{
					pdfNodeRef:nodeRef
				},
				actionUrl : null,
				destroyOnHide : true,
				doBeforeDialogShow :
				{
					fn : doBeforePDFSignDialogShow,
					scope : this
				},
				onSuccess :
				{
					fn : function dlA_onActionDetails_success(response)
					{
						Alfresco.util.PopupManager.displayMessage(
						{
							text : this.msg("message.success.pdf-signer")
						});
					},
					scope : this
				},
				onFailure :
				{
					fn : function dLA_onActionDetails_failure(response)
					{	
						Alfresco.util.PopupManager.displayMessage(
						{
							text : this.msg("message.fail.pdf-fail")
						});
					},
					scope : this
				}
			});
			pdfSign.show();	
		}
	});
})();