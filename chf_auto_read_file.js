/*:
 * @auto read file.
 * @version 1.0
 * @author chicken feathers and copilot
 */
var _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
    _Scene_Boot_start.call(this);
    if (DataManager.isAnySavefileExists()) {
        this.fadeOutAll();
        DataManager.loadGame(1);
        SceneManager.goto(Scene_Map);
    }
};
