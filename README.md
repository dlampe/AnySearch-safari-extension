# CJW AnySearch Plus Safari Extension

This plugin is a fork from the original AnySearch by Matt Swain.

Use a custom search engine in the Safari address bar, or disable searches completely and with nice feature, interpret special domains as real life domains, without interpreting as search string ;) 

[Download here](http://www.cjw-network.com/blog/cjw-anysearch-plus-safari-extension/cjwanysearchplus.safariextz)

Take a look at https://github.com/mcs07/AnySearch-safari-extension to understand how it basically work.

The additional functionality is hopefully itself descriptive ... 

    ...
    specialDomainListAsArray.some( checkTopLevelDomain, additonalParameters )
    if ( additonalParameters.specialDomainFound === true ) {
                e.target.url = "http://" + e.query
                return
    }
    ...

    function checkTopLevelDomain( topLevelDomainString ) {
        var topLevelDomainStringAsRegEx =  new RegExp ("\." + topLevelDomainString.trim() + "$")
        if ( topLevelDomainStringAsRegEx.test( this.query ) === true ) {
            this.specialDomainFound = true
            return true
        }
        return false
    }