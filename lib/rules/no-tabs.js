/**
 * @fileoverview Rule to check for tabs inside a file
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const regex = /\t/;

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow all tabs",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-tabs"
        },
        schema: []
    },

    create(context) {
        return {
            Program(node) {
                context.getSourceCode().getLines().forEach((line, index) => {
                    const match = regex.exec(line);

                    if (match) {
                        context.report({
                            node,
                            loc: {
                                line: index + 1,
                                column: match.index + 1
                            },
                            message: "Unexpected tab character."
                        });
                    }
                });
            }
        };
    }
};
