/**
* name
*/
var Net;
(function (Net) {
    var Message = /** @class */ (function () {
        function Message() {
            this.seq = 0;
            this.code = 0;
            this.command = -2;
        }
        return Message;
    }());
    Net.Message = Message;
})(Net || (Net = {}));
//# sourceMappingURL=Message.js.map