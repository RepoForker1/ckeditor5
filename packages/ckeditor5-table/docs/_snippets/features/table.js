/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* globals ClassicEditor, console, window, document */

import { CS_CONFIG } from '@ckeditor/ckeditor5-cloud-services/tests/_utils/cloud-services-config';

ClassicEditor
	.create( document.querySelector( '#snippet-table' ), {
		cloudServices: CS_CONFIG,
		toolbar: {
			items: [
				'insertTable',
				'|',
				'fontFamily', 'fontSize',
				'|',
				'bold', 'italic',
				'|',
				'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify',
				'|',
				'bulletedList', 'numberedList',
				'|',
				'indent', 'outdent',
				'|',
				'link', 'blockQuote',
				'|',
				'undo', 'redo'
			],
			viewportTopOffset: window.getViewportTopOffsetConfig()
		},
		table: {
			contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
		}
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
