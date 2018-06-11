tabbar: {
  color: "#000000";
  selectedColor: "#0f87ff";
  backgroundColor: "#ffffff";
  borderStyle: "black";
  list:[
          {
              pagePath: "/pages/resource/resource",
              text: "资源",
              iconPath: "../../images/resource_options_unfocus.png",
              selectedIconPath: "../../images/resource_options_focus.png",
              selected: true
            },
          {
            pagePath: "/pages/member/member",
            text: "成员",
            iconPath: "../../images/member_options_unfocus.png",
            selectedIconPath: "../../images/member_options_focus.png",
            selected: true
          },
            {
              pagePath: "/pages/banke/banke",
              text: "活动",
              iconPath: "../../images/interaction_options_unfocus.png",
              selectedIconPath: "../../images/cc_icon_on.png",
              selected: false
            },
            {
              pagePath: "/pages/classdetail/classdetail",
              text: "消息",
              iconPath: "../../images/notice_options_unfocus.png",
              selectedIconPath: "../../images/notice_options_focus.png",
              selected: false
            },
            {
              pagePath: "/pages/detail/detail",
              text: "消息",
              iconPath: "../../images/detail_options_unfocus.png",
              selectedIconPath: "../../images/detail_options_focus.png",
              selected: false
            },
          ];
      position: "bottom"
}
