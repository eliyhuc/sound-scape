import { StyleSheet } from 'react-native'
import colors from './appColors'

export default StyleSheet.create({
    outline_btn:{
        width:'100%',
        borderColor:colors.pink,
        borderWidth:1,
        fontSize: 18,
        alignItems: "center",
        borderRadius: 12,
        padding: 12,
        marginTop:12
    },
    outline_btn_txt:{
        fontFamily: "Raleway-Medium",
        fontSize: 16,
        color: colors.pink,
    },
    btn_txt: {
        fontFamily: "Raleway-Medium",
        fontSize: 20,
        color: colors.white,
      },
      btn: {
        backgroundColor: colors.pink,
        borderRadius: 12,
        padding: 12,
        width: "100%",
        fontSize: 18,
        alignItems: "center",
      },
      form_container: {
        width: "100%",
        marginTop: 30,
      },
      input: {
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 10,
        width: "100%",
        fontSize: 18,
        fontFamily: "Raleway-Medium",
        marginBottom:12
      },

      input_search: {
        backgroundColor: colors.white,
        borderRadius: 6,
        padding: 10,
        width: "85%",
        fontSize: 18,
        fontFamily: "Raleway-Medium",
      },


      logo_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      container: {
        flex: 1,
        backgroundColor: colors.celeste,
      },
      title: {
        color: colors.prussian_blue,
        marginLeft: -14,
        fontSize: 40,
        fontFamily: "Lobster-Regular",
      },
      containerView: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius:12,
        marginBottom:12
      },
      item: {
        flex: 1,
        margin: 4,
        padding:5,
        borderRadius:6,
        backgroundColor: colors.pink,
        alignItems: 'center',
        justifyContent: 'center',
      },
      itemSec:{
        flex: 1,
        margin: 4,
        padding:5,
        borderRadius:6,
        backgroundColor: colors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
      },
      list: {
        flexGrow: 0,
        width: '100%',
      },
      badge:{
        padding: 5,
        margin: 5,
        borderRadius:6,
        backgroundColor: colors.pink,
      },


      search_container:{
        width:'100%',
        height:'10%',
        padding:10,
        backgroundColor:colors.pink,
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      list_container: {
        width:'100%',
        height: '90%',
        padding:10
      },
      search_btn:{
        padding:10,
        backgroundColor: colors.prussian_blue,
        borderRadius:6
      },



      ti_main_image:{
        width:'100%',
        height:350
      },

      add_btn:{
        alignItems:'center',
        justifyContent:'center',
        width:100, height:100,
        borderRadius:100,
        backgroundColor:colors.prussian_blue,
      }

})