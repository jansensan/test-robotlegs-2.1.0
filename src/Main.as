package
{
	import robotlegs.bender.extensions.contextView.ContextView;
	import robotlegs.bender.framework.impl.Context;

	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;


	public class Main extends Sprite
	{
		private	var	_context:Context;


		public function Main()
		{
			initStage();
			init();
		}


		private function initStage():void
		{
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
		}


		private function init():void
		{
			_context = new Context().configure(new ContextView(this));
		}
	}
}
