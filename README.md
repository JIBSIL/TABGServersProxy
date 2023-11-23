# TABGServersProxy
Minimalist proxy for Totally Accurate Battlegrounds servers, allowing custom servers to be listed

Built using Express/NodeJS.

## Running
You can be a server list owner in five easy steps!
1. Clone this repository
2. Install Node if it isn't already installed
3. Configure index.js to point to the server list IPs you want (this is relative to the client, not the proxy)
4. Configure the "mocks" that you want, or server list entries. This is also in index.js
5. Run it with `node index`. The app will be on port 3010.

## Hooking this up to a client
This is quite complicated. Binaries will **never** be distributed due to copyright concerns, but a patcher for the existing TABG game will be released soon. For now, bear with this complex guide.

1. Install dnSpy and run.
2. Navigate to your TABG folder from Steam > TABG > Settings > Manage > Browse Local Files
3. Click Open in dnSpy and copy the path in. Navigate to TotallyAccurateBattlegrounds_Data > Managed > Assembly-CSharp.dll and open it with dnSpy
4. We can do some real hacker stuff from here.. but let's just modify one field.
5. Go to Edit > Search Assemblies
6. Make sure `Search For:` is set to All of the Above and Files in the Same Folder
7. Put `RegionURL` into the search box and click the first result
8. Right click, click Edit Class and scroll all the way down
9. Change RegionURL to your community server list URL. For example, `private static string RegionURL = "http://localhost:3010";` would point to localhost:3010 with HTTP (no SSL)
10. Click the Compile button on the bottom-right
11. Press the Save All button on the top, press ... and select your DLL file again
12. Press OK. If prompted, select Overwrite.

Great! Now we have built our Assembly-CSharp.dll file, we are ready to run it!
Note: you may distribute this file at your own risk for ease of use. There are potential copyright concerns associated with this method, though.

First, we have to disable Easy Anti Cheat. I promise this will be easy!
1. Go back into the root folder TotallyAccurateBattleGrounds
2. Rename TABG_Launcher.exe to EAC.exe
3. Rename TotallyAccurateBattlegrounds.exe to TABG_Launcher.exe
4. Rename TotallyAccurateBattlegrounds_Data to TABG_Launcher_Data
5. The modded version is ready to launch on Steam! You can now launch it as usual.

## License
This is licensed under MIT. Copy and share as you wish. Credit would be preferred, but it is not required.