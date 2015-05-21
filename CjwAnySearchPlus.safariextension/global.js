safari.application.addEventListener('beforeSearch', handleBeforeSearch, false);

function handleBeforeSearch(e) {
	e.preventDefault();
	var url                       = safari.extension.settings.engine;
    var specialDomainsIgnoreFlag  = safari.extension.settings.specialDomainsIgnore;
    var specialDomainListAsArray  = safari.extension.settings.specialDomainList.split( "," );
    if ( specialDomainsIgnoreFlag === true ) {
        var additonalParameters = { "specialDomainFound": false, "query": e.query };
        specialDomainListAsArray.some( checkTopLevelDomain, additonalParameters );
        if ( additonalParameters.specialDomainFound === true ) {
            e.target.url = "http://" + e.query;
            return
        }
    }
    if (url == 'disable') {
		url = 'http://' + e.query + '.com'
	} else {
		if (url == 'custom') {
			url = safari.extension.settings.customEngine;
		}
		url = url.replace('@@@', encodeURIComponent(e.query).replace(/%20/g,'+'));
	}
	e.target.url = url;
}

function checkTopLevelDomain( topLevelDomainString ) {
    var topLevelDomainStringAsRegEx =  new RegExp ("\." + topLevelDomainString.trim() + "$");
    if ( topLevelDomainStringAsRegEx.test( this.query ) === true ) {
        this.specialDomainFound = true;
        return true
    }
    return false
}
