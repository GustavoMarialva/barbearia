import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "600,50",
    date: "10/09/2024",
    type: 0, //despesas
  },

  {
    id: 2,
    label: "Pix Cliente X",
    value: "110,00",
    date: "12/09/2024",
    type: 1, //receita
  },

  {
    id: 3,
    label: "Pagamento Cliente Y",
    value: "65,00",
    date: "15/09/2024",
    type: 1, //receita
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Baiano Barber's" />

      <Balance saldo="10.000,00" gastos="-600,00" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },

  list: {
    marginRight: 14,
    marginLeft: 14,
  },
});
