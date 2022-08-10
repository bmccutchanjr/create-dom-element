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

	if (typeof tag != "string")
	{
		console.log ("createDOMElement says 'tag is invalid: " + tag);
		return false;
	}

	if (typeof options != "object")
	{
		console.log ("createDOMElement says ''options' is invalid: ' " + typeof options);
		return false;
	}

	if (parent)
	{
		try
		{
			if (typeof parent == "string") parent = document.getElementById (parent);
		}
		catch (_)
		{
			console.log ("createDOMElement says '" + id + "' is not in the DOM");
			return false
		}

		if (typeof parent != "object")
		{
			console.log ("createDOMElement says 'parent' is invalid");
			return false
		}

		if (!parent.tagName)
		{
			console.log ("createDOMElement says 'parent' is not an HTML element");
			return false
		}
	}

	//	Now that that is done, get on with the real work...

//
//
//
//

	if (parent) parent.append (element);

	return element;
}