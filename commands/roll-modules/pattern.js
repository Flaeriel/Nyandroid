module.exports = {
    name: "pattern",
    expr: [
        {"name": "calc", "pattern": /^(\d+)(\W)(\d+)/ },
        {"name": "dice", "pattern": /^(\d+)[d](\d+)$/ },
        {"name": "dice_mod", "pattern": /^(\d+)[d](\d+)(\W)(\d+)$/},
    ],
}
