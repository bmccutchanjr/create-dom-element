function createDOMElement (tag, options, parent)
{	//	This function will create and return an HTML element and configure it with the parameters passed in options.
	//
	//	tag			The tag name of the element to be created.
	//
	//	options		A JavaScript object with the names of attributes and values to assign to the newly created element.
	//
	//	parent		A reference to an element already in the DOM.  It can be the element itself or a string.  If a
	//				string, it should be the ID of an element already in the DOM.  The new element will be appended
	//				to 'parent'.
	//
	//				IMPORTANT:  If 'parent' is not passed to the function, an element will be created but it will not
	//				be added to the DOM.
	//
	//	'tag' and 'options' are required.
	//
	//	If successul, the function will return a reference to the newly created element.  If not, the function returns
	//	false.

	//	First some error checking...

	try
	{	//	I can't check if values passed are the correct type, but I can't really know if they actually represent
		//	real tag name and existing DOM elements.  I suppose I could compare tag to a list of all valid HTML tag
		//	name, but that's unnecessary.  It's easier to wrap everything ia a try block and let JavaScript tell
		//	if it's invalid...
		
		if ((parent) && (typeof parent == "string")) parent = document.getElementById (parent);

		const element = document.createElement (tag);

		Object.entries (options).forEach (attribute =>
		{
			switch (attribute[0])
			{
				case "classList":
				{	//	classList could be passed as a string representing one class, or as an array of strings.

					if (typeof attribute[1] == "string")
						element.classList.add (attribute[1])
					else
						attribute[1].forEach (a => { element.classList.add (a) } );
					break;
				}

				case "innerText":
				{
					element.innerText = attribute[1];
					break;
				}

				case "innerHTML":
				{
					element.innerHTML = attribute[1];
					break;
				}

				case "style":
				{
					//	Not actually sure how to handle this one just yet...
					break;
				}

				default:
				{
					element.setAttribute (attribute[0], attribute[1]);
					break;
				}
			}
		})

		if (parent) parent.append (element);

		return element;
	}
	catch (error)
	{
		console.log ("createDOMElement says:");
		console.log (error);
		return false;
	}
}