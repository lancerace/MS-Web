

/**
 * salt form e.g [Salt must be in the form of: $Vers$log2(NumRounds)$saltvalue].
 * $2y is deprecated. developed by john the ripper.
 * $2b = newest version.
 * both are compatible, but version letter need to change to support the library.
**/

function replaceAt(str: string, index: number, replacement: string): string {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

async function parse_hashedpw(hashedPassword: string, newversion?: boolean): Promise<string> {
    if (newversion)
        return replaceAt(hashedPassword, 2, 'b');
    else
        return replaceAt(hashedPassword, 2, 'y');
}


export default { parse_hashedpw }