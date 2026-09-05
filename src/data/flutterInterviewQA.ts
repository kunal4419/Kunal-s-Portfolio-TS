export interface QAItem {
  id: number;
  question: string;
  category: string;
  answer: string;
  rawLines?: { text: string; style: string | null; is_bold: boolean }[];
}

export const flutterInterviewQAData: QAItem[] = [
  {
    "id": 1,
    "question": "What is Flutter and how does it differ from other mobile app development frameworks?",
    "category": "Fundamentals",
    "answer": "Flutter is a platform developed by Google. The key differences from other technologies are:\n\u2022 Cross-platform development: Flutter allows you to create cross-platform applications for Android, iOS, Web, and Desktop with a single codebase\n\u2022 High performance: Flutter has very high performance compared to other technologies because it uses C++ Skia engine for rendering",
    "rawLines": [
      {
        "text": "Flutter is a platform developed by Google. The key differences from other technologies are:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Cross-platform development: Flutter allows you to create cross-platform applications for Android, iOS, Web, and Desktop with a single codebase",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 High performance: Flutter has very high performance compared to other technologies because it uses C++ Skia engine for rendering",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 2,
    "question": "What is the Dart programming language and why does Flutter use it?",
    "category": "Dart",
    "answer": "Dart is a programming language introduced by Google. It supports object-oriented programming. Flutter uses Dart because:\n\u2022 Enables writing of readable and maintainable code\n\u2022 Object-oriented programming support provides a strong foundation for app development",
    "rawLines": [
      {
        "text": "Dart is a programming language introduced by Google. It supports object-oriented programming. Flutter uses Dart because:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Enables writing of readable and maintainable code",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Object-oriented programming support provides a strong foundation for app development",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 3,
    "question": "What is Mixin?",
    "category": "Dart",
    "answer": "Mixin is an alternative to inheritance. With mixins, you can access properties of different classes without traditional inheritance.\nExample: If you have multiple mixins (Mixin A, Mixin B, Mixin C) each with different properties, you can access all their properties by using the 'with' keyword followed by the mixin names (A, B, C). This way you can access the properties of all the classes in the mixin.",
    "rawLines": [
      {
        "text": "Mixin is an alternative to inheritance. With mixins, you can access properties of different classes without traditional inheritance.",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Example: If you have multiple mixins (Mixin A, Mixin B, Mixin C) each with different properties, you can access all their properties by using the 'with' keyword followed by the mixin names (A, B, C). This way you can access the properties of all the classes in the mixin.",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 4,
    "question": "What is the difference between FutureBuilder and StreamBuilder in Flutter?",
    "category": "Async & Reactive",
    "answer": "FutureBuilder:\n\u2022 Takes a list in the future parameter and returns a widget in the builder parameter\n\u2022 Executes only once\nStreamBuilder:\n\u2022 Takes a list or stream in the stream parameter and returns a widget in the builder parameter\n\u2022 Executes every time when there are changes in the code",
    "rawLines": [
      {
        "text": "FutureBuilder:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Takes a list in the future parameter and returns a widget in the builder parameter",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Executes only once",
        "style": null,
        "is_bold": false
      },
      {
        "text": "StreamBuilder:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Takes a list or stream in the stream parameter and returns a widget in the builder parameter",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Executes every time when there are changes in the code",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 5,
    "question": "What is a Widget in Flutter and what are the differences between Stateful and Stateless widgets?",
    "category": "Widgets & Core",
    "answer": "A Widget is a small piece of code that is used to create the UI in Flutter. Everything in Flutter is a widget.\nStateless Widget:\n\u2022 Data cannot change at runtime\n\u2022 Examples: Text, Button\nStateful Widget:\n\u2022 Data can be changed at runtime\n\u2022 Examples: Checkbox, Radio Button, Text Input",
    "rawLines": [
      {
        "text": "A Widget is a small piece of code that is used to create the UI in Flutter. Everything in Flutter is a widget.",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Stateless Widget:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Data cannot change at runtime",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Examples: Text, Button",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Stateful Widget:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Data can be changed at runtime",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Examples: Checkbox, Radio Button, Text Input",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 6,
    "question": "Explain the Widget Life Cycle in Flutter",
    "category": "Lifecycle",
    "answer": "The lifecycle of a widget follows this sequence:\n1. createState() - Called first to create the state\n2. initState() - Initializes the state\n3. didChangeDependencies() - Called when the widget's dependency changes\n4. build() - Builds the widget\n5. didUpdateWidget() - Called when the widget is updated\n6. setState() - Rebuilds the widget when state changes\n7. dispose() - Cleans up resources",
    "rawLines": [
      {
        "text": "The lifecycle of a widget follows this sequence:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. createState() - Called first to create the state",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. initState() - Initializes the state",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. didChangeDependencies() - Called when the widget's dependency changes",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. build() - Builds the widget",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. didUpdateWidget() - Called when the widget is updated",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. setState() - Rebuilds the widget when state changes",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. dispose() - Cleans up resources",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 7,
    "question": "What are Keys in Flutter? Why are they important?",
    "category": "Widgets & Core",
    "answer": "Keys are used to identify widgets. There are multiple types of keys:\nLocalKey:\n\u2022 Accessible only inside a widget\n\u2022 Generally used during testing - you have to define the key of all widgets and check values based on that widget key\nGlobalKey:\n\u2022 Accessible globally\n\u2022 Used to store state\n\u2022 Generally used in drawer implementation - you can store the state of the drawer in a global key and open/close it based on that state",
    "rawLines": [
      {
        "text": "Keys are used to identify widgets. There are multiple types of keys:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "LocalKey:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Accessible only inside a widget",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Generally used during testing - you have to define the key of all widgets and check values based on that widget key",
        "style": null,
        "is_bold": false
      },
      {
        "text": "GlobalKey:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Accessible globally",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Used to store state",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Generally used in drawer implementation - you can store the state of the drawer in a global key and open/close it based on that state",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 8,
    "question": "What are Flutter's advantages and disadvantages?",
    "category": "Fundamentals",
    "answer": "Advantages:\n\u2022 Create cross-platform applications with a single codebase\n\u2022 High performance due to C++ Skia engine\nDisadvantages:\n\u2022 Application size is very large compared to native technologies\n\u2022 Many platform-related features are not available - you have to create plugins and implement them in the project",
    "rawLines": [
      {
        "text": "Advantages:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Create cross-platform applications with a single codebase",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 High performance due to C++ Skia engine",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Disadvantages:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Application size is very large compared to native technologies",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Many platform-related features are not available - you have to create plugins and implement them in the project",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 9,
    "question": "What is Hot Reload and Hot Restart?",
    "category": "Developer Tools",
    "answer": "Hot Reload:\n\u2022 When any changes are made to the code, they immediately affect the UI\n\u2022 Simplifies development and reduces development time\nHot Restart:\n\u2022 When changes are made to the code, they do not immediately affect the UI\n\u2022 You have to recreate your state or restart the application to get the updated changes",
    "rawLines": [
      {
        "text": "Hot Reload:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 When any changes are made to the code, they immediately affect the UI",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Simplifies development and reduces development time",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Hot Restart:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 When changes are made to the code, they do not immediately affect the UI",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 You have to recreate your state or restart the application to get the updated changes",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 10,
    "question": "What are Build Modes used in Flutter?",
    "category": "Build & Release",
    "answer": "There are three build modes in Flutter:\nDebug:\n\u2022 Generally used during development\nRelease:\n\u2022 Generally used in production\nProfile:\n\u2022 Used for profiling - you can check CPU performance and monitor data leaks",
    "rawLines": [
      {
        "text": "There are three build modes in Flutter:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Debug:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Generally used during development",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Release:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Generally used in production",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Profile:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Used for profiling - you can check CPU performance and monitor data leaks",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 11,
    "question": "What is the difference between Container and SizedBox?",
    "category": "UI & Layout",
    "answer": "SizedBox:\n\u2022 Generally used to create spaces between widgets\n\u2022 Parameters: height, width, child\nContainer:\n\u2022 Has multiple parameters: height, width, margin, padding, decoration, and box styling\n\u2022 Can decorate any widget according to your needs",
    "rawLines": [
      {
        "text": "SizedBox:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Generally used to create spaces between widgets",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Parameters: height, width, child",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Container:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Has multiple parameters: height, width, margin, padding, decoration, and box styling",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Can decorate any widget according to your needs",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 12,
    "question": "How does Flutter handle responsive design?",
    "category": "UI & Layout",
    "answer": "Flutter handles responsive design through multiple ways:\n\u2022 MediaQuery.of(context).size - Get height and width to divide your screen accordingly\n\u2022 AspectRatio - Maintain aspect ratio across different screen sizes\n\u2022 Expanded - Expand widgets to fill available space\n\u2022 Flex - Define flex value to divide your screen in Flutter",
    "rawLines": [
      {
        "text": "Flutter handles responsive design through multiple ways:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 MediaQuery.of(context).size - Get height and width to divide your screen accordingly",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 AspectRatio - Maintain aspect ratio across different screen sizes",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Expanded - Expand widgets to fill available space",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Flex - Define flex value to divide your screen in Flutter",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 13,
    "question": "How do you use Overlay widget?",
    "category": "UI & Layout",
    "answer": "To use Overlay widget:\n1. Use Stack widget which takes one parameter called 'children'\n2. Place your widgets inside children\n3. Use Position widget on top of your widget inside Stack\n4. Pass top, left, bottom, right parameters to Position widget\n5. Based on these values, you can place your widget over any other widget",
    "rawLines": [
      {
        "text": "To use Overlay widget:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. Use Stack widget which takes one parameter called 'children'",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Place your widgets inside children",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Use Position widget on top of your widget inside Stack",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Pass top, left, bottom, right parameters to Position widget",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Based on these values, you can place your widget over any other widget",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 14,
    "question": "What is Navigator and how is it used for navigation in Flutter?",
    "category": "Navigation & Routing",
    "answer": "Navigator is used for navigation in Flutter.\nNavigator.push():\n\u2022 Navigate from one page to another\n\u2022 Previous page remains in the stack\nNavigator.pushReplacement():\n\u2022 Navigate from one page to another\n\u2022 Previous stack will not be there\nNavigator.pop():\n\u2022 Go back to the previous page",
    "rawLines": [
      {
        "text": "Navigator is used for navigation in Flutter.",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Navigator.push():",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Navigate from one page to another",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Previous page remains in the stack",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Navigator.pushReplacement():",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Navigate from one page to another",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Previous stack will not be there",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Navigator.pop():",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Go back to the previous page",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 15,
    "question": "How to create animations in Flutter?",
    "category": "Animations",
    "answer": "Flutter provides multiple ways to create animations:\nTween Animation (without third-party library):\n\u2022 Use start position and end position\n\u2022 Pass duration\n\u2022 Achieve animation without third-party library\nThird-party libraries:\n\u2022 flutter_animation library\n\u2022 Lottie library",
    "rawLines": [
      {
        "text": "Flutter provides multiple ways to create animations:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Tween Animation (without third-party library):",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Use start position and end position",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Pass duration",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Achieve animation without third-party library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Third-party libraries:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 flutter_animation library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Lottie library",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 16,
    "question": "Explain the difference between Provider, GetX, and BLoC for State Management",
    "category": "State Management",
    "answer": "Provider:\n\u2022 Works on three principles: ChangeNotifier, ChangeNotifierProvider, and Consumer\n\u2022 Create a controller extending ChangeNotifier\n\u2022 Register controller in main.dart using ChangeNotifierProvider\n\u2022 Use Consumer in UI to access data from controller\n\u2022 Call methods using Provider.of<ControllerName>(context).methodName()\n\u2022 Use notifyListeners() in controller to update UI automatically\nGetX:\n\u2022 Can be used in three ways: GetX, GetBuilder, and Obx\nGetX/Obx approach:\n- Extend controller with GetxController\n- Create variables with .obs to make them observable\n- Create instance using Get.put(MyController())\n- Wrap widgets in Obx to automatically update UI when data changes\n- Use list.value when updating observable lists\nGetBuilder approach:\n- No need to use .obs for variables\n- Use update() method in controller\n- Wrap widgets in GetBuilder in UI\nBLoC:\n\u2022 Create two classes: Cubit class and State class\n\u2022 In State class, declare classes for different states (initialState, loadingState, etc.)\n\u2022 In Cubit class, write business logic and emit states\n\u2022 Register in main.dart using MultiBlocProvider\n\u2022 Use BlocBuilder in UI to listen to state changes\n\u2022 Check state type using 'state is StateClass' to display appropriate UI",
    "rawLines": [
      {
        "text": "Provider:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Works on three principles: ChangeNotifier, ChangeNotifierProvider, and Consumer",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Create a controller extending ChangeNotifier",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Register controller in main.dart using ChangeNotifierProvider",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Use Consumer in UI to access data from controller",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Call methods using Provider.of<ControllerName>(context).methodName()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Use notifyListeners() in controller to update UI automatically",
        "style": null,
        "is_bold": false
      },
      {
        "text": "GetX:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Can be used in three ways: GetX, GetBuilder, and Obx",
        "style": null,
        "is_bold": false
      },
      {
        "text": "GetX/Obx approach:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "- Extend controller with GetxController",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Create variables with .obs to make them observable",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Create instance using Get.put(MyController())",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Wrap widgets in Obx to automatically update UI when data changes",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Use list.value when updating observable lists",
        "style": null,
        "is_bold": false
      },
      {
        "text": "GetBuilder approach:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "- No need to use .obs for variables",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Use update() method in controller",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- Wrap widgets in GetBuilder in UI",
        "style": null,
        "is_bold": false
      },
      {
        "text": "BLoC:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Create two classes: Cubit class and State class",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 In State class, declare classes for different states (initialState, loadingState, etc.)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 In Cubit class, write business logic and emit states",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Register in main.dart using MultiBlocProvider",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Use BlocBuilder in UI to listen to state changes",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Check state type using 'state is StateClass' to display appropriate UI",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 17,
    "question": "When would you use setState?",
    "category": "State Management",
    "answer": "setState is used when you want to re-render your build method when the state changes.",
    "rawLines": [
      {
        "text": "setState is used when you want to re-render your build method when the state changes.",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 18,
    "question": "How does Flutter's InheritedWidget work?",
    "category": "State Management",
    "answer": "InheritedWidget works like setState and rebuilds the build method.\nTo implement:\n1. Implement InheritedWidget into the class\n2. Extend with InheritedWidget\n3. You will get the updateShouldNotify() method\n4. Based on this method, you can update your widget\nNote: InheritedWidget rebuilds the build method, so it is generally avoided.",
    "rawLines": [
      {
        "text": "InheritedWidget works like setState and rebuilds the build method.",
        "style": null,
        "is_bold": false
      },
      {
        "text": "To implement:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. Implement InheritedWidget into the class",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Extend with InheritedWidget",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. You will get the updateShouldNotify() method",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Based on this method, you can update your widget",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Note: InheritedWidget rebuilds the build method, so it is generally avoided.",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 19,
    "question": "How do you make HTTP requests in Flutter?",
    "category": "Networking & API",
    "answer": "In Flutter, HTTP requests can be made using:\nHTTP Package:\n\u2022 A basic package for making HTTP requests\nDio Package:\n\u2022 More advanced than HTTP package\n\u2022 Has multiple features like Interceptor, timeout support\n\u2022 Very useful for image handling\n\u2022 Generally preferred over HTTP package",
    "rawLines": [
      {
        "text": "In Flutter, HTTP requests can be made using:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "HTTP Package:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 A basic package for making HTTP requests",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Dio Package:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 More advanced than HTTP package",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Has multiple features like Interceptor, timeout support",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Very useful for image handling",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Generally preferred over HTTP package",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 20,
    "question": "How would you implement data caching in a Flutter app?",
    "category": "Storage & Caching",
    "answer": "For data caching, SharedPreferences is generally used:\nSteps:\n1. Add SharedPreferences dependency\n2. Create instance: SharedPreferences preferences = await SharedPreferences.getInstance()\n3. Set data using: setInteger(), setString(), setDouble(), etc. with key and value\n4. Get data using: getInteger(), getString(), getDouble(), etc. with key\n5. You can retrieve stored data based on the key",
    "rawLines": [
      {
        "text": "For data caching, SharedPreferences is generally used:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Steps:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. Add SharedPreferences dependency",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Create instance: SharedPreferences preferences = await SharedPreferences.getInstance()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Set data using: setInteger(), setString(), setDouble(), etc. with key and value",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Get data using: getInteger(), getString(), getDouble(), etc. with key",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. You can retrieve stored data based on the key",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 21,
    "question": "How do you handle offline data in Flutter?",
    "category": "Storage & Caching",
    "answer": "Multiple libraries are available for offline storage:\nSQLite (SQFLite):\n\u2022 Used for SQL-related database operations\nHive:\n\u2022 Used for NoSQL database operations\nOther packages: Realm, and more\nSQFLite Implementation:\n1. Add flutter_sqflite dependency in pubspec.yaml\n2. Create a DB Helper class\n3. Create database instance with database name and version\n4. Create database and tables\n5. Create controller class with business logic (add, delete, update operations)\n6. Execute queries using DB Helper in UI as needed\nHive Implementation:\n1. Add flutter_hive and hive dependencies\n2. Initialize Hive in main(): await Hive.initFlutter()\n3. Open a box: await Hive.openBox('boxName')\n4. Store data using: box.put(key, value)\n5. Get data using: box.get(key)",
    "rawLines": [
      {
        "text": "Multiple libraries are available for offline storage:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "SQLite (SQFLite):",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Used for SQL-related database operations",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Hive:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Used for NoSQL database operations",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Other packages: Realm, and more",
        "style": null,
        "is_bold": false
      },
      {
        "text": "SQFLite Implementation:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Add flutter_sqflite dependency in pubspec.yaml",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Create a DB Helper class",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Create database instance with database name and version",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Create database and tables",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Create controller class with business logic (add, delete, update operations)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Execute queries using DB Helper in UI as needed",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Hive Implementation:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Add flutter_hive and hive dependencies",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Initialize Hive in main(): await Hive.initFlutter()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Open a box: await Hive.openBox('boxName')",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Store data using: box.put(key, value)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Get data using: box.get(key)",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 22,
    "question": "How would you encrypt sensitive data?",
    "category": "Security",
    "answer": "Multiple libraries are available to encrypt sensitive data:\n\u2022 in_crypt library\n\u2022 crypto library\n\u2022 flutter_secure_storage library\n\u2022 AES library\nYou can encrypt your data using these libraries and also decrypt the data as per your requirements.",
    "rawLines": [
      {
        "text": "Multiple libraries are available to encrypt sensitive data:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 in_crypt library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 crypto library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 flutter_secure_storage library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 AES library",
        "style": null,
        "is_bold": false
      },
      {
        "text": "You can encrypt your data using these libraries and also decrypt the data as per your requirements.",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 23,
    "question": "What are the different types of testing in Flutter?",
    "category": "Testing & QA",
    "answer": "There are three types of testing in Flutter:\nUnit Testing:\n\u2022 Tests the proper logic/block\n\u2022 Example: Test an addition method to check if it works correctly\n\u2022 Use expect() to pass original data and expected data\n\u2022 Test passes if data matches, otherwise fails\nWidget Testing:\n\u2022 Find widgets according to their key\n\u2022 Check values inside the widget based on the widget key\nIntegration Testing:\n\u2022 End-to-end testing of the entire application",
    "rawLines": [
      {
        "text": "There are three types of testing in Flutter:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Unit Testing:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Tests the proper logic/block",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Example: Test an addition method to check if it works correctly",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Use expect() to pass original data and expected data",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Test passes if data matches, otherwise fails",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Widget Testing:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 Find widgets according to their key",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Check values inside the widget based on the widget key",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Integration Testing:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "\u2022 End-to-end testing of the entire application",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 24,
    "question": "How would you debug performance issues in a Flutter app?",
    "category": "Performance & Profiling",
    "answer": "To debug performance issues in Flutter:\n1. Use: flutter run --profile\nWith this command, you can:\n\u2022 Perform profiling of your Flutter application\n\u2022 Check CPU performance\n\u2022 Monitor memory usage and detect data leaks\n\u2022 Check for performance issues and optimize accordingly",
    "rawLines": [
      {
        "text": "To debug performance issues in Flutter:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. Use: flutter run --profile",
        "style": null,
        "is_bold": false
      },
      {
        "text": "With this command, you can:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Perform profiling of your Flutter application",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Check CPU performance",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Monitor memory usage and detect data leaks",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Check for performance issues and optimize accordingly",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 25,
    "question": "How would you handle dependency injection in Flutter?",
    "category": "Architecture & DI",
    "answer": "To handle dependency injection in Flutter, the GetIt package is generally used:\nSteps:\n1. Add GetIt package to pubspec.yaml\n2. Create a class for dependency injection\n3. Create GetIt instance: GetIt getIt = GetIt.instance\n4. Register classes using: getIt.registerSingleton<ClassName>()\n5. Register all required classes in this class\n6. Call this class in main.dart method before running the app\nUsage in widgets:\n\u2022 Instead of calling 'new ClassName()', use: getIt<ClassName>()\n\u2022 This way, dependency injection is handled and the registered singleton instance is used",
    "rawLines": [
      {
        "text": "To handle dependency injection in Flutter, the GetIt package is generally used:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Steps:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "1. Add GetIt package to pubspec.yaml",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Create a class for dependency injection",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Create GetIt instance: GetIt getIt = GetIt.instance",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Register classes using: getIt.registerSingleton<ClassName>()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Register all required classes in this class",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Call this class in main.dart method before running the app",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Usage in widgets:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 Instead of calling 'new ClassName()', use: getIt<ClassName>()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "\u2022 This way, dependency injection is handled and the registered singleton instance is used",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 26,
    "question": "How does Flutter integrate with native code for Android and iOS?",
    "category": "Native Integration",
    "answer": "To integrate native code with Flutter, create a Flutter plugin.\nAndroid Integration:\n1. Create a plugin project in Android Studio (select 'plugin' instead of 'application')\n2. After creation, you'll get: Android folder, iOS folder, and Lib folder\n3. In Lib folder, create a mediator file (e.g., my_device_info.dart) that acts as a bridge between Android and Flutter\n4. Use MethodChannel in the mediator file as a unique key for communication\n5. Open MainActivity.kt/java file in Android folder\n6. In onMethodCall() callback, check if method name matches the one in mediator\n7. Get device information in Android and invoke it in result\n8. The mediator file will return the device information to Flutter side\niOS Integration:\n1. Open iOS folder in Xcode\n2. In Classes folder, open the mediator file (e.g., my_device_info.swift/m)\n3. In method callback function, check if method name matches\n4. Extract device information\n5. Invoke the data in the result\nFlutter Usage:\n1. In example project (or your own project), open main.dart\n2. Use the same MethodChannel name in Flutter\n3. Call the mediator class method and receive device information from native code",
    "rawLines": [
      {
        "text": "To integrate native code with Flutter, create a Flutter plugin.",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Android Integration:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Create a plugin project in Android Studio (select 'plugin' instead of 'application')",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. After creation, you'll get: Android folder, iOS folder, and Lib folder",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. In Lib folder, create a mediator file (e.g., my_device_info.dart) that acts as a bridge between Android and Flutter",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Use MethodChannel in the mediator file as a unique key for communication",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Open MainActivity.kt/java file in Android folder",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. In onMethodCall() callback, check if method name matches the one in mediator",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. Get device information in Android and invoke it in result",
        "style": null,
        "is_bold": false
      },
      {
        "text": "8. The mediator file will return the device information to Flutter side",
        "style": null,
        "is_bold": false
      },
      {
        "text": "iOS Integration:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Open iOS folder in Xcode",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. In Classes folder, open the mediator file (e.g., my_device_info.swift/m)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. In method callback function, check if method name matches",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Extract device information",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Invoke the data in the result",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Flutter Usage:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. In example project (or your own project), open main.dart",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Use the same MethodChannel name in Flutter",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Call the mediator class method and receive device information from native code",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 27,
    "question": "How would you implement push notifications in a Flutter app?",
    "category": "Firebase & Cloud",
    "answer": "Firebase Setup:\n1. Go to console.firebase.google.com\n2. Create a Firebase project\nAndroid Configuration:\n1. Select Android in Firebase console\n2. Enter package name (from build.gradle in Android project)\n3. Copy class path dependency and add to Android project's build.gradle\n4. Copy implementation dependency and add to app's build.gradle\n5. Generate SHA-1 and SHA-256 keys using Gradle in Android Studio\n6. Add both keys to Firebase console\n7. Download google-services.json and add to app folder in Android project\niOS Configuration:\n1. You must have a paid Apple Developer account\n2. Open iOS folder in Xcode\n3. Add your Apple Developer account\n4. In Apple Developer portal, create certificate, identifier, and add devices\n5. Generate provisioning profile in key options\n6. In Firebase console, add iOS application\n7. Enter bundle ID (from Xcode)\n8. Upload provisioning file (.p8) generated from Apple Developer portal\n9. Enter Team ID and save\n10. In Xcode, add capabilities: Push Notification and Remote Messaging\n11. Generate and copy GoogleService-Info.plist from Firebase and add to Xcode\nFlutter Implementation:\n1. Add firebase_messaging and firebase_core dependencies to pubspec.yaml\n2. Initialize Firebase in main.dart: await Firebase.initializeApp()\n3. Create a notification service class\n4. Import firebase_messaging\n5. Get device token: await messaging.getToken()\n6. Create methods for different notification states:\n- onMessage (app is in foreground)\n- onMessageOpenedApp (app is in background)\n- onBackgroundMessage (app is terminated)\n7. Set up method channel to handle notifications\n8. Receive title and body from each method\n9. Perform desired actions based on notification data received",
    "rawLines": [
      {
        "text": "Firebase Setup:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Go to console.firebase.google.com",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Create a Firebase project",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Android Configuration:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Select Android in Firebase console",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Enter package name (from build.gradle in Android project)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Copy class path dependency and add to Android project's build.gradle",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Copy implementation dependency and add to app's build.gradle",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Generate SHA-1 and SHA-256 keys using Gradle in Android Studio",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Add both keys to Firebase console",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. Download google-services.json and add to app folder in Android project",
        "style": null,
        "is_bold": false
      },
      {
        "text": "iOS Configuration:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. You must have a paid Apple Developer account",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Open iOS folder in Xcode",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Add your Apple Developer account",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. In Apple Developer portal, create certificate, identifier, and add devices",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Generate provisioning profile in key options",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. In Firebase console, add iOS application",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. Enter bundle ID (from Xcode)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "8. Upload provisioning file (.p8) generated from Apple Developer portal",
        "style": null,
        "is_bold": false
      },
      {
        "text": "9. Enter Team ID and save",
        "style": null,
        "is_bold": false
      },
      {
        "text": "10. In Xcode, add capabilities: Push Notification and Remote Messaging",
        "style": null,
        "is_bold": false
      },
      {
        "text": "11. Generate and copy GoogleService-Info.plist from Firebase and add to Xcode",
        "style": null,
        "is_bold": false
      },
      {
        "text": "Flutter Implementation:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Add firebase_messaging and firebase_core dependencies to pubspec.yaml",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Initialize Firebase in main.dart: await Firebase.initializeApp()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Create a notification service class",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Import firebase_messaging",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Get device token: await messaging.getToken()",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Create methods for different notification states:",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- onMessage (app is in foreground)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- onMessageOpenedApp (app is in background)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "- onBackgroundMessage (app is terminated)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. Set up method channel to handle notifications",
        "style": null,
        "is_bold": false
      },
      {
        "text": "8. Receive title and body from each method",
        "style": null,
        "is_bold": false
      },
      {
        "text": "9. Perform desired actions based on notification data received",
        "style": null,
        "is_bold": false
      }
    ]
  },
  {
    "id": 28,
    "question": "Explain the steps to prepare a Flutter app for production",
    "category": "Deployment & CI/CD",
    "answer": "Android Production Release:\n1. Open Android folder in Android Studio\n2. Go to Build \u2192 Generate Signed Bundle/APK\n3. Generate keystore.jks file with details (name, email, password, organization)\n4. Select 'Release' build variant\n5. Generate the bundle/APK file\n6. Open Google Play Store Console account\n7. Add application with title and description\n8. Add screenshots of the application\n9. Add privacy policy\n10. Add data safety policy\n11. Upload the APK/bundle file\n12. Add 12-20 testers for testing\n13. Submit for review\niOS Production Release:\n1. You must have a paid Apple Developer account\n2. Open iOS folder in Xcode\n3. Create certificate, identifier, provisioning profile, and key in Apple Developer portal\n4. Select Team in Xcode Signing & Capabilities\n5. Go to Product \u2192 Archive to create an archive\n6. Click 'Distribute App' button\n7. The app will be uploaded to TestFlight\n8. In Apple Connect dashboard, add the application\n9. Add application details (title, description)\n10. Add testers for internal testing\n11. Add privacy policy\n12. Select the app from TestFlight\n13. Submit for review\n14. After 5 days review period, app will be available on App Store",
    "rawLines": [
      {
        "text": "Android Production Release:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. Open Android folder in Android Studio",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Go to Build \u2192 Generate Signed Bundle/APK",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Generate keystore.jks file with details (name, email, password, organization)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Select 'Release' build variant",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Generate the bundle/APK file",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Open Google Play Store Console account",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. Add application with title and description",
        "style": null,
        "is_bold": false
      },
      {
        "text": "8. Add screenshots of the application",
        "style": null,
        "is_bold": false
      },
      {
        "text": "9. Add privacy policy",
        "style": null,
        "is_bold": false
      },
      {
        "text": "10. Add data safety policy",
        "style": null,
        "is_bold": false
      },
      {
        "text": "11. Upload the APK/bundle file",
        "style": null,
        "is_bold": false
      },
      {
        "text": "12. Add 12-20 testers for testing",
        "style": null,
        "is_bold": false
      },
      {
        "text": "13. Submit for review",
        "style": null,
        "is_bold": false
      },
      {
        "text": "iOS Production Release:",
        "style": "Emphasis",
        "is_bold": false
      },
      {
        "text": "1. You must have a paid Apple Developer account",
        "style": null,
        "is_bold": false
      },
      {
        "text": "2. Open iOS folder in Xcode",
        "style": null,
        "is_bold": false
      },
      {
        "text": "3. Create certificate, identifier, provisioning profile, and key in Apple Developer portal",
        "style": null,
        "is_bold": false
      },
      {
        "text": "4. Select Team in Xcode Signing & Capabilities",
        "style": null,
        "is_bold": false
      },
      {
        "text": "5. Go to Product \u2192 Archive to create an archive",
        "style": null,
        "is_bold": false
      },
      {
        "text": "6. Click 'Distribute App' button",
        "style": null,
        "is_bold": false
      },
      {
        "text": "7. The app will be uploaded to TestFlight",
        "style": null,
        "is_bold": false
      },
      {
        "text": "8. In Apple Connect dashboard, add the application",
        "style": null,
        "is_bold": false
      },
      {
        "text": "9. Add application details (title, description)",
        "style": null,
        "is_bold": false
      },
      {
        "text": "10. Add testers for internal testing",
        "style": null,
        "is_bold": false
      },
      {
        "text": "11. Add privacy policy",
        "style": null,
        "is_bold": false
      },
      {
        "text": "12. Select the app from TestFlight",
        "style": null,
        "is_bold": false
      },
      {
        "text": "13. Submit for review",
        "style": null,
        "is_bold": false
      },
      {
        "text": "14. After 5 days review period, app will be available on App Store",
        "style": null,
        "is_bold": false
      }
    ]
  }
];
