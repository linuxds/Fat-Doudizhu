/**
* name
*/
var Game;
(function (Game) {
    var PoolManage = /** @class */ (function () {
        function PoolManage() {
        }
        //获得到一个Poker对象
        PoolManage.prototype.getPoker = function () {
            var poker = Laya.Pool.getItemByClass('poker', Game.Poker);
            poker.recover();
            return poker;
        };
        return PoolManage;
    }());
    Game.PoolManage = PoolManage;
})(Game || (Game = {}));
//# sourceMappingURL=PoolManage.js.map