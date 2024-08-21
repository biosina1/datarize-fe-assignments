import styles from "./NoItemView.module.scss";
interface NoItemViewProps {
  children: React.ReactNode;
}

const NoItemView = ({ children }: NoItemViewProps) => {
  return <p className={styles.noItem}>{children}</p>;
};

export default NoItemView;
