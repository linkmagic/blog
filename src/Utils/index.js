class Utils {

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

  static createMarkup = (htmlText) => {
    return {
      __html: htmlText
    };
  };

  static getId =() => {
    let dateNow = new Date();
    return (
      String(dateNow.getFullYear()) +
      String(((dateNow.getMonth() + 1) < 10 ? '0' : '') + (dateNow.getMonth() + 1)) +
      String(dateNow.getDate() < 10 ? '0' : '') + dateNow.getDate() +
      String(dateNow.getHours() < 10 ? '0' : '') + dateNow.getHours() +
      String(dateNow.getMinutes() < 10 ? '0' : '') + dateNow.getMinutes() +
      String(dateNow.getSeconds() < 10 ? '0' : '') + dateNow.getSeconds()
    );
  };

  static getDateNow = () => {
    let dateNow = new Date();
    return (
      String(dateNow.getFullYear()) + '.' +
      String(((dateNow.getMonth() + 1) < 10 ? '0' : '') + (dateNow.getMonth() + 1)) + '.' +
      String(dateNow.getDate() < 10 ? '0' : '') + dateNow.getDate()
    );
  };

}

export default Utils;