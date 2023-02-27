### Technologies used

- React-Native 0.71.2


### How to run

- yarn (to install the dependencies)
- yarn start
- adb reverse tcp:8088 tcp:8088 (mapping the emulator port to match the computer)
- yarn android

Note: As I was using port 8081 in the App, in the api I ended up using 8088.
