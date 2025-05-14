import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.unity3d.player.UnityPlayer;

@CapacitorPlugin(name = "Unity")
public class UnityPlugin extends Plugin {
    private UnityPlayer unityPlayer;

    @PluginMethod
    public void startUnity(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            unityPlayer = new UnityPlayer(getActivity());
            getBridge().getWebView().addView(unityPlayer.getView());
            call.resolve();
        });
    }

    @PluginMethod
    public void pauseUnity(PluginCall call) {
        if (unityPlayer != null) {
            unityPlayer.pause();
            call.resolve();
        } else {
            call.reject("Unity not initialized");
        }
    }

    @PluginMethod
    public void resumeUnity(PluginCall call) {
        if (unityPlayer != null) {
            unityPlayer.resume();
            call.resolve();
        } else {
            call.reject("Unity not initialized");
        }
    }
}
