import java.util.*;

public class SelectionSort{
    /**
     *iとJの位置にある値を変えます。
     */
     public static void swapElements(int[] array, int i, int j){
         int temp = array[i];
         array[i] = array[j];
         array[j] = temp;
         
     }
     /**
      *startからはじめて最初の位置を探して（Start含む）
      *  配列の最後の位置に移動する
      */
      public static int indexLowest(int[] array, int start){
          int lowIndex = start;
          for(int i = start; i < array.length; i++){
                  if(array[i] < array[lowIndex]){
                      lowIndex = i;
                  }
              }
              return lowIndex;
          }
        /**
         * 選択整列を使用して整列する。
         */ 
         public static void selectionSort(int[] array){
             for(int i = 0; i < array.length; i++){
                 int j = indexLowest(array, i);
                 swapElements(array, i, j);
             }
         }
          
      
}
