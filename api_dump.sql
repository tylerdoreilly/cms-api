PGDMP     .                    {           api    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16399    api    DATABASE     w   CREATE DATABASE api WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Canada.1252';
    DROP DATABASE api;
                admin    false            �            1259    16428    template_items    TABLE     �   CREATE TABLE public.template_items (
    id integer NOT NULL,
    name character varying,
    "position" integer,
    field character varying,
    content character varying
);
 "   DROP TABLE public.template_items;
       public         heap    admin    false            �            1259    16435    template_items_custom    TABLE     �   CREATE TABLE public.template_items_custom (
    id integer NOT NULL,
    name character varying,
    "position" integer,
    field character varying,
    content character varying
);
 )   DROP TABLE public.template_items_custom;
       public         heap    admin    false            �            1259    16421    template_types    TABLE     \   CREATE TABLE public.template_types (
    id integer NOT NULL,
    type character varying
);
 "   DROP TABLE public.template_types;
       public         heap    admin    false            �            1259    16407 	   templates    TABLE     �   CREATE TABLE public.templates (
    id integer NOT NULL,
    type character varying,
    title character varying,
    data jsonb,
    date_created timestamp with time zone
);
    DROP TABLE public.templates;
       public         heap    admin    false            �            1259    16401    users    TABLE     x   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(30),
    email character varying(30)
);
    DROP TABLE public.users;
       public         heap    admin    false            �            1259    16400    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          admin    false    215                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          admin    false    214            u           2604    16404    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          admin    false    215    214    215                      0    16428    template_items 
   TABLE DATA           N   COPY public.template_items (id, name, "position", field, content) FROM stdin;
    public          admin    false    218   �                 0    16435    template_items_custom 
   TABLE DATA           U   COPY public.template_items_custom (id, name, "position", field, content) FROM stdin;
    public          admin    false    219   }                 0    16421    template_types 
   TABLE DATA           2   COPY public.template_types (id, type) FROM stdin;
    public          admin    false    217   �                 0    16407 	   templates 
   TABLE DATA           H   COPY public.templates (id, type, title, data, date_created) FROM stdin;
    public          admin    false    216                     0    16401    users 
   TABLE DATA           0   COPY public.users (id, name, email) FROM stdin;
    public          admin    false    215   *(                  0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          admin    false    214                       2606    16441 0   template_items_custom template_items_custom_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.template_items_custom
    ADD CONSTRAINT template_items_custom_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.template_items_custom DROP CONSTRAINT template_items_custom_pkey;
       public            admin    false    219            }           2606    16434 "   template_items template_items_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.template_items
    ADD CONSTRAINT template_items_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.template_items DROP CONSTRAINT template_items_pkey;
       public            admin    false    218            {           2606    16427 "   template_types template_types_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.template_types
    ADD CONSTRAINT template_types_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.template_types DROP CONSTRAINT template_types_pkey;
       public            admin    false    217            y           2606    16413    templates templates_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.templates
    ADD CONSTRAINT templates_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.templates DROP CONSTRAINT templates_pkey;
       public            admin    false    216            w           2606    16406    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            admin    false    215               �   x�e�;1Dk�>�~. ����&d���*k�=>�Z !��g�i8�|�C�S�LGG��O��i��0�=��/qd�5P_9�ű��p�3C��������td[�B����=�2��O��K8�ZtY ZDSb�U�\7Ƙ7��QS         W  x��W�n7>�OA�$�����IvTȒ�RZPP���0�ܐ\��)�>@O}�>J��ߐ��lٱ�P�?\�g��f����df���(����>���T܋��\��ϥP��iyv갇9�Q�~H�2���E�U���я�>���&3vi��z�<�l�ܔ67a��t��,�o��N;�5���m��3��&�,��� �2�\J%��я�,�kM5n����\��t&�?�pOz��b��-�����6���zs��'����*p���Ug�W�V��W��{��;7��
&��@/�f��bUc74��lXrm|�f�e�
��憫�X�<0ڬT�;��oN���)g�K����r�K���]�םla]q+�1]+��6ͻ�\�
��u�l��i��H�6�ZX�a�RX+,�B�Jx���N���'���v��i�<;<9�rci���a�Rŝ�ձ��ı+�Rߒ�y�΍R�c��#W-��$[0w���������ɫ=��S�%�h���Fd�X�=�z�
F���nU��:�i��[�E�A�Z�7e45�"���R�m`[Q룟֌I�]x.�Y���Kk
�LeSH�[]%�V����T������.m<�i��و)d��$Kj"6-Ұ��>��Jj�e�CvB�ل����rMC�3�\Ʉ�j�n����p�^͠?(Aj��Sݏ��9�"��-y�+\+5��rUS�ݽ#� ��Z�vD;t8:?�6��x�{�E5��'�lߢ�qS��5��Kf�@J�o7|��'��ݗ�y�nS%e?jBc,

h�o�\����*�f�!�e���ǥ��kZs���)2�"*�����)�yY �t��2^	`�
��0�@ �K�i��!���[�߲���K�P}�Yh.����UH��v��O��}.G��[N �L"�QfH��TЈ��l��ݠA��ջ�
S�<���R�jQ�7B��������(c*��룭��ug���q!�2�9��QT����$X ��5�BSH�j�/���֮RÄ���M�Z'�*D�/lG�$gp�f���,���G��+l���Bк��I��]�a�8���q�T4���
5.��9��Nm��$p��:݄���+���7�kTӟ���	,��!��j9�IH���8Nn�a�E�|�a��Oa��=E�k�gY-�t99W B$��H�����}�	!p�$�ׄr�g7����Ps��)�do�[H�t�\�����l�+66��U𢱍�sf�6E�<e��t���e!|�Y���H�A8F��]��P�\�����,�8 A'��%q�8С��N�pQ�N ���R���9C
A�y:�+M;�p�Ǆ�2jF0Q�Jԃ!(*/�/��D���*b�_gA����$�$p�n \Ý����u����4}�-��eM�����6+�/��v�A� ��l�*N��,��.�W(	vհY,�׵�1o:z�7&�i���.��i�PAY��'M��"G�h�W9ˑK֣	�A� �eE_��wۮ>�.��C����q�)��0,��$ek��ԓ�֐�u�E@����D�eUJ^�W��>fuF�<���S���!�m]_�Ջ���!+Mlx����4��&�y/aIoNC֛�t�n���oW����~2��lz5���lI�l�������ͧl0��ǽ��0����d�M�xt9�C*�t��x؛Y2��cx���v֛����S�<��/�M�ߔ�����wз*�/}|�Ё�zc6��O���D������K���r���b�瘜���x�������t0O/0�����7�ގ��|3��7�R;�������� B��            x�3�(J-.VJ�IM,N����� G`�         	  x��X�n��N����Bd�o��:n E�-d�)�X4EA�P�rBr�j�� �����Gɓ�w�i$���*� N8���?�9�ٳ;#�e�H��Y��\�Q��g�[C&�K���E�5�>oO�Z4�5�"%��Tdyʝ���Z9��^-�^O8(��Ȱ�Jʫ�y��tR+П��b��/��I�1�ș����r���*1p"����k��J�z��o�	��FA�a��u\��JYi��]�o���۬�)_q#Z�]{�>j��I4n�^4f|>���
G����̤	k��H�b]�x�=��ފ�#��M6{˚׆��¸�&�j}��F��ۇ*p��2ܨ�W��N��'�
�4�mv�˴L���22��F,
�^�5-�6�l��^([���<7���ޱ�i�h��''�B\^q�4b������盏�v�>��ҹ�^���V�v236۲l��	�\p/O�r�L��l;O��-p���.g�u.�0t�`�\C_��H2��^��>���ݺu*v�b�js�E/f��VŲ�:z�+��WX{u�__���Ew�-����jE��������֮,���[K�L���Eی�)���ZD���R���X�2�3+��>�j��:��?������6�)��C�yV�{��+��w��~�#[�UQ��g�����DS$ՃF��y�$6"���\�M��k�f(��I������P���Y]�\Ng"��'NcM)/�,�C�D�Ji�xAZ�=����xIE��D�OV�-=9�.];����l��-s|�\�R�D���P�f����|�ە���H5U,�����[�E�$���+�srQ������?ۖ �.��Ҡg1���l}!��m=�K��Y�2y$����O�p������[��
ݦ2�
ĭ+�|��XU�&�"�ef=���Z�u���'�@�q��ǅ�1�̐^�ǝ
:�����	���XΥ��x�97H���� �ISZ�i���n�g[͡m@�)W@g�(�C�� D%��d40
$^,hE(�ׂP=i�`]��lm�t�/*�&�=���)�;��Q1�Rdͳ���ں3���Rm}�%�q�͡)yUI� ����:�֖1��&<��Z�"��ȡ�:ZD�<ߪ�㽰YŒ������%-(�B�0�*�P�c2o�-�� E���|�zS3����`\S�ڛOjj%�8�|�p��*^����+�t���W��䷟.$��l=��
��4��L~�:�-�IXg9ꁖ:�Ka��d��E�y1K�]�s "	��E���HjOFHr~	���xr/�6��JL�ݢJV�6�|�D8=.�k�+��
3����Me���MVXG�E	�ݵ:EQ�������H���F��R_(q��x�]� �$�<�NL� q�C��H�%<�SX��ǤF��S�DH)x���>�5�*a��m%dЌ��YUڠIQ8�Q`��c6�
�z�ω�
B� &):�Δ�������eR=�.8�3��j�B����~8o�Y�x��_DA��������բ����"�:�-����="���}me�
=1	�+�ӳ�X.L�v��$��F_G0�4E�^bb^,��d��Z��DР��v�"�����y��|?�9E]���Q�D�l��`R�f2��+��(Pd�:�qIS��U�ǩU��R�
��*Lsȼ͘C�s��1���B�	���pX�`t3�v"u��d�Q���o���|ן��5�F��`��w��`<I�g�wo~�w�l:f���;�n�Q���G��`Ć���\q����ΤϢ~�����k5r֙��	����K�=>�WN��-�N������֖�޻��f���=���7���$@t:C6]��[+D����:_�Rx����w�M��Ӱ}7��~�q۟�����vZ>;?v�Λa�A��H��gH�OJ����~yr�럟���_�~{|v��^\~������ŋ�?������ϟ?�:��         7   x�3���I-�,�z�E��99���Ey�y��%�Ez���\F�1~@����� �g     