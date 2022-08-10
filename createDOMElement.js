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
		
//	01	Know what?  That kind of obviates the need for error-checking...
//	01			if (typeof tag != "string")
//	01			{
//	01				console.log ("createDOMElement says 'tag is invalid: " + tag);
//	01				return false;
//	01			}
//	01	
//	01			if (typeof options != "object")
//	01			{
//	01				console.log ("createDOMElement says ''options' is invalid: ' " + typeof options);
//	01				return false;
//	01			}
//	01	
		if (parent)
		{
//	01				try
//	01				{
				if (typeof parent == "string") parent = document.getElementById (parent);
//	01				}
//	01				catch (error)
//	01				{
//	01					console.log ("createDOMElement says:");
//	01					console.log (error);
//	01					return false
//	01				}
//	01	
//	01				if (typeof parent != "object")
//	01				{
//	01					console.log ("createDOMElement says 'parent' is invalid");
//	01					return false
//	01				}
//	01	
//	01				if (!parent.tagName)
//	01				{
//	01					console.log ("createDOMElement says 'parent' is not an HTML element");
//	01					return false
//	01				}
		}
//	01	
//	01		//	Now that that is done, get on with the real work...
//	01	
//	01		let element = [];

		document.createElement (tag);
//
//
//

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