import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchKelas } from '../../actions';

class KelasScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Kelas ${navigation.state.params.id}`,
    headerRight: <Button title="Edit" onPress={() => navigation.navigate('KelasForm', {id: navigation.state.params.id})}/>
  });

  componentDidMount(){
    const { params } = this.props.navigation.state;
    this.props.fetchKelas(params.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.kelasnya}>
          <View style={styles.bagianKelasnya}>
            <View style={styles.imageKelas}>
            <Image
              styleName="medium-square"
              source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
            />
            </View>
            <View style={styles.bagianKanan}>
              <View style={styles.namaTgl}>
                
              </View>
              <View style={styles.deskripsi}>
                
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tabtabnya}></View>
        <View style={styles.kontentabnya}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  kelasnya: {
      flex: .5,
  },
  tabtabnya: {
      flex: .2,
      backgroundColor: '#000'
  },
  kontentabnya: {
      flex: 1,
      backgroundColor: '#CCC'
  },
  bagianKelasnya: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  imageKelas: {
    flex: 1,
    justifyContent: 'flex-start',
    maxWidth: 150,
    // backgroundColor: '#FFC107',
  },
  bagianKanan: {
    flex:1,
    flexDirection: 'column',
    paddingLeft: 5
  },
  namaTgl: {
    flex:.4,
    backgroundColor:'#76FF03'
  },
  deskripsi: {
    flex:1,
    backgroundColor:'#EEFF41'
  }
});


function mapStateToProps(state) {
  return {
    kelas: state.kelas
  }
}

export default connect(mapStateToProps, { fetchKelas })(KelasScreen);
