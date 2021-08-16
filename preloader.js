

/* Import é uma biblioteca do Wix */
import {local} from 'wix-storage';

/* Import (WixWindow) é uma biblioteca do Wix para exibir conteudo apos um tempo */
import wixWindow from 'wix-window';


$w.onReady(function () {
	if(local.getItem("firstTimePopupShown")) {
		wixWindow.openLightbox("Ligthbox Name");
		local.setItem("firstTimePopupShown", "yes");
	}
} );
 
$w.onReady(() => {

 waitForLoading();

});

export function button6_onClick() {

 $w('#box9').show();

 waitForLoading();

}

function waitForLoading() {

 setTimeout(() => {

  $w('#box9').hide('FadeOut');

 }, 10000);

}