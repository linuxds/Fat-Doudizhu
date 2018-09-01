/**
* name 
*/
module Game
{
	export class MessageHandler
	{
		constructor()
		{
		}

		public handle(data: any)
		{
			if (data.code == undefined || data.code == 0) 
			{
				//根据不同的command进行处理
				switch (data.command) 
				{
					case Constants.MsgCode.PLAY_GAME: //游戏中消息
						game.room.onPlayGame(data.content);
						break;
					case Constants.MsgCode.PLAYER_WANTDIZHU: //抢地主消息
						game.room.onWantDiZhu(data.content);
						break;
					default:
						break;
				}
				
			} 
			else 
			{ //错误处理

			}
		}

		public matchCallback(message: Net.Message)
		{
			//console.log(message);
			//展示房间
			game.enterView.removeSelf();
			game.enterView.removeChildren();
			game.enterView = null;

			if(!game.roomView)
			{
				game.roomView = new GameView.RoomView();
			}
			//处理座位信息
			game.room.processSeat(message.content);

			Laya.stage.addChild(game.roomView);
		}
	}
}