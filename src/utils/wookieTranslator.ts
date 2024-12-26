const wookieeToEnglishMap: { [key: string]: string } = {
    oaoohuwhao: "count",
    whwokao: "next",
    akrcwohoahoohuc: "previous",
    rcwochuanaoc: "results",
    whrascwo: "name",
    rcooaoraaoahoowh_akworcahoowa: "rotation_period",
    oorcrhahaoraan_akworcahoowa: "orbital_period",
    waahrascwoaoworc: "diameter",
    oaanahscraaowo: "climate",
    rrrcrahoahaoro: "gravity",
    aoworcrcraahwh: "terrain",
    churcwwraoawo_ohraaoworc: "surface_water",
    akooakhuanraaoahoowh: "population",
    rcwocahwawowhaoc: "residents",
    wwahanscc: "films",
    oarcworaaowowa: "created",
    wowaahaowowa: "edited",
    hurcan: "url",
};

export function translateWookieeData(data: any): any {
    console.log('execute translateWookieeData', data);
    
    if (Array.isArray(data)) {
        console.log("TRANSFORM 1", data);
        return data.map((item) => translateWookieeData(item));
    } else if (typeof data === "object" && data !== null) {
        const translatedData: { [key: string]: any } = {};
        for (const key in data) {
            const translatedKey = wookieeToEnglishMap[key] || key;
            if (translatedKey === "results") {
                translatedData[translatedKey] = data[key].map((item) => translateWookieeData(item));
            } else {
                translatedData[translatedKey] = data[key];
            }
        }
        console.log("TRANSFORM 3", translatedData);
        return translatedData;
    }
    return data;
}
