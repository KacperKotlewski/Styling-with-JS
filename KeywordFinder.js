var IDofKeyword = 0;

function KeywordFinder() {
	if(findKeyword == true) {
		var elementsWithKeywords = document.getElementsByClassName("withKeywords");
		
		for(var i = 0; i < elementsWithKeywords.length; i++) {
			
			KeywordFinderAndTipAdder(elementsWithKeywords[i]);
		}
	}
}

function KeywordFinderAndTipAdder(element)
{	

	let tableOfWordsFromText = [];
	{
		let text = element.innerHTML;
		let wordCounter = 0;
		let word = "";
		for(let i = 0; i< text.length; i++) {
			
			if(text[i].toLowerCase() != text[i].toUpperCase() || (parseInt(text[i]) >= 0 && parseInt(text[i]) <= 9)) {
				
				word+=text[i];
				
			} else {
				if(word != "") {
					tableOfWordsFromText[wordCounter] = word;
					wordCounter++;
					word = "";
				}
				tableOfWordsFromText[wordCounter] = text[i];
				wordCounter++;
			}
		}
	}
	
	console.log(tableOfWordsFromText);
	
	element.innerHTML ="";
	
	for(let i = 0; i < tableOfWordsFromText.length; i++) {
		var word = tableOfWordsFromText[i];
		
		var KeywordFound = false;
		for(let j = 0; j < Keywords.length; j++) {
			var keyword = Keywords[j];
				
			if(word.toLowerCase() == keyword.word.toLowerCase()) {
				KeywordFound = true;
				break;
			}
		}
		if(KeywordFound == true){
				var tipID = "tip" + IDofKeyword.toString();
				
				
				let tip = document.createElement('span');
				tip.innerHTML = keyword.tip;
				tip.classList.add("tip");
				tip.id = tipID;
				
				
				var child = document.createElement('span');
				child.innerHTML = word;
				child.classList.add("keyword");
				
				element.appendChild(child);
				element.appendChild(tip);
				
				child.addEventListener("mouseover", () => {
						
						setTimeout(()=> {
								tip.style.opacity = "1";
							}
							, 500
						);
					}
					, false
				);
				child.addEventListener("mouseout", () => {
							tip.style.opacity = "0";
					}
					, false
				);
				
				IDofKeyword++;
			} else if(word == '\n') {
				element.appendChild(document.createElement('br'));
			} else {
				element.appendChild(document.createTextNode(word));
			}
	}
}