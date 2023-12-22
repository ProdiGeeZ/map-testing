# Spiking Findings Report: MapboxGL vs React Native Maps

## MapboxGL with Expo

### Challenges and Solutions
- **Integration Difficulties**: We encountered significant challenges integrating MapboxGL with Expo. The primary issue is that Expo, in its default setup, does not provide direct access to the native code layer required by MapboxGL.
- **EAS Builds as a Solution**: Despite these challenges, it's still possible to use MapboxGL with Expo by leveraging Expo Application Services (EAS) Builds. EAS Builds allow for the creation of custom development builds that can include native code, making it a viable solution for integrating MapboxGL in an Expo project.
- **Recommendation for Further Research**: Due to the complexity of this process, further research and understanding of EAS Builds is recommended for successful implementation.

### Considerations
- **Customization and Advanced Features**: MapboxGL offers extensive customization options and advanced features, making it a powerful tool for map integration.
- **Development Complexity**: The process of setting up and maintaining a project with MapboxGL and Expo using EAS Builds is considerably more complex than standard Expo projects.

## React Native Maps with Google API

### Observations
- **Seamless Integration**: React Native Maps integrates seamlessly with the Google API, presenting fewer hurdles in development.
- **Functionality and Customization**: While it may not offer the same level of customization and functionality as MapboxGL, React Native Maps still provides sufficient capabilities to meet the requirements of our MVP User Stories.

### Advantages
- **Ease of Use**: Due to its straightforward integration process and compatibility with Expo's managed workflow, React Native Maps is easier to use and maintain.
- **Sufficient Customization**: Despite having fewer customization options than MapboxGL, React Native Maps still offers a range of features that are adequate for most standard mapping requirements in mobile apps.

## Conclusion and Recommendation
Given the complexities involved with integrating MapboxGL in an Expo project and the adequacy of React Native Maps for our MVP requirements, it is recommended to proceed with React Native Maps for our current project scope. This approach balances functionality with development efficiency and maintainability.
