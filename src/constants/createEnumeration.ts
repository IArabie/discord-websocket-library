export default function createEnumeration(objects: any[]) {
    const json = {};
    for(const [index, key] of objects.entries()) {
        if(key === null) continue;
        json[key] = index;
        json[index] = key;
    }

    return json;
}