/**
* name 
*/
module Net{
	export class Message{
		public seq:number; //用于处理ack
		public code:number; //状态码
		public command:number; //消息码
		public content:any; //消息内容

		constructor()
		{
			this.seq = 0;
			this.code = 0;
			this.command = -2;
		}
	}
}