"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = (first, last) => {
    return first.map(fN => last.match({
        some: lN => `${fN} ${lN}`,
        none: fN,
    }));
};
exports.getFullName = (first, last) => {
    return first.and_then(firstName => last.map(lastName => ({ firstName, lastName })));
};
//# sourceMappingURL=index.js.map