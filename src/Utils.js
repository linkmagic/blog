export default class Utils {

  static getArticleById = (jsonArticles, id) => {
    for (let i = 0; i < jsonArticles.length; i++) {
      if (id === jsonArticles[i].articleid) {
        return jsonArticles[i];
      }
    }
    return null;
  };

  static getAuthorNicknameById = (jsonUsers, id) => {
    for (let i = 0; i < jsonUsers.length; i++) {
      if (id === jsonUsers[i].userid) {
        return jsonUsers[i].nickname;
      }
    }
    return 'Unregistered';
  };

  static getArticleGroupNameById = (jsonArticleGroups, id) => {
    for (let i = 0; i < jsonArticleGroups.length; i++) {
      if (id === jsonArticleGroups[i].groupid) {
        return jsonArticleGroups[i].name;
      }
    }
    return 'Unnamed';
  };

}